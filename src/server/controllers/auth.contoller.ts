import { Request, Response } from "express";
import { hashPassword } from "../auth/password";
import prisma from "../db/prisma";
import { generateToken } from "../auth/jwt";
import { compare } from "bcrypt";

export async function registerUser(req: Request, res: Response) {
  const { username, password, email } = req.body;

  // first check if the user already exists
  const exisitingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (exisitingUser) {
    return res.status(400).json({ error: "User already exists" });
  }

  // hash passwrord
  const passwordHash = await hashPassword(password);

  // store user in database
  try {
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        passwordHash,
      },
    });
    // create a token for the user and send it back
    const token = generateToken({ id: newUser.id, email });

    res.status(201).json({ token });
  } catch (error) {
    return res.status(500).json({ error: "Failed to create user" });
  }
}

export async function loginUser(req: Request, res: Response) {
    // check password and generate token
    const {email, password} = req.body;

    // find user by email
    const user = await prisma.user.findUnique({
        where: {email}
    })

    if (!user || !user.passwordHash) {
        return  res.status(401).json({error: 'Invalid email or password'});
    }

    // compare password with stored hash
    const isPasswordValid = await compare(password, user.passwordHash);
    if (!isPasswordValid) {
        return res.status(401).json({error: 'Invalid email or password'});
    }

    // generate token
    const token = generateToken({id: user.id, email});
    res.status(200).json({token});
}
