import { MongoClient, ObjectId } from "mongodb";
import { DB_URI } from "$env/static/private";

import bcrypt from "bcryptjs";

const client = new MongoClient(DB_URI);

await client.connect();
const db = client.db("Tibby"); // your DB name in Compass

// Get ALL alphabets (consonants)
async function getAlphabets() {
  let alphabets = [];
  try {
    const collection = db.collection("alphabets");
    const query = {};

    alphabets = await collection.find(query).sort({ order: 1 }).toArray();

    // convert ObjectId -> string
    alphabets = alphabets.map((item) => ({
      ...item,
      _id: item._id.toString()
    }));
  } catch (error) {
    console.log("Error fetching alphabets:", error.message);
  }
  return alphabets;
}

// Get ALL vowels
async function getVowels() {
  let vowels = [];
  try {
    const collection = db.collection("vowels");
    const query = {};

    vowels = await collection.find(query).sort({ order: 1 }).toArray();

    vowels = vowels.map((item) => ({
      ...item,
      _id: item._id.toString()
    }));
  } catch (error) {
    console.log("Error fetching vowels:", error.message);
  }
  return vowels;
}

// Get a single vowel by id
async function getVowelById(id) {
  try {
    const collection = db.collection("vowels");
    const item = await collection.findOne({ _id: new ObjectId(id) });
    if (!item) return null;
    return {
      ...item,
      _id: item._id.toString()
    };
  } catch (error) {
    console.log("Error fetching vowel by id:", error.message);
    return null;
  }
}

// Get a single alphabet by id
async function getAlphabetById(id) {
  try {
    const collection = db.collection("alphabets");
    const item = await collection.findOne({ _id: new ObjectId(id) });
    if (!item) return null;
    return {
      ...item,
      _id: item._id.toString()
    };
  } catch (error) {
    console.log("Error fetching alphabet by id:", error.message);
    return null;
  }
}

// =======================
// Users / Authentication (secure with bcrypt)
// =======================

// Find user by email
async function getUserByEmail(email) {
  const collection = db.collection("users");
  return await collection.findOne({ email });
}

// Find user by id
async function getUserById(id) {
  const collection = db.collection("users");
  return await collection.findOne({ _id: new ObjectId(id) });
}

// Create a new user with hashed password
async function createUser({ email, username, password }) {
  const collection = db.collection("users");

  const existing = await collection.findOne({ email });
  if (existing) {
    throw new Error("User with this email already exists");
  }

  const existingUsername = await collection.findOne({ username });
  if (existingUsername) {
    throw new Error("Username already taken");
  }

  // Hash the password with bcrypt
  const passwordHash = await bcrypt.hash(password, 10);

  const doc = {
    email,
    username,
    passwordHash,       // 🔐 we store the hash, not the plain password
    createdAt: new Date()
  };

  const result = await collection.insertOne(doc);
  return result.insertedId.toString();
}

// Check credentials: return user if password is correct, else null
async function verifyUser(email, password) {
  const user = await getUserByEmail(email);
  if (!user) return null;

  const match = await bcrypt.compare(password, user.passwordHash);
  if (!match) return null;

  user._id = user._id.toString();
  return user;
}

async function deleteUserById(id) {
  const collection = db.collection("users");
  await collection.deleteOne({ _id: new ObjectId(id) });
}



export default {
  getAlphabets,
  getAlphabetById,
  getVowels,
  getVowelById,
  
  getUserByEmail,
  getUserById,
  createUser,
  verifyUser,
  deleteUserById
};
