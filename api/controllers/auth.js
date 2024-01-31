import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const register = (req, res) => {
  //check esisting user

  const q = "SELECT * FROM users WHERE email = ? OR username= ?";
  db.query(q, [req.body.email, req.body.username], (err, data) => {
    if (err) return res.json(err);
    if (data.length) return res.status(409).json("User already exists");

    //Hash the password and create a user
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const q = "INSERT INTO users (`username`,`email`,`password`) VALUES (?)";
    const values = [req.body.username, req.body.email, hash];

    db.query(q, [values], (err, data) => {
      if (err) return res.json(err);
      return res.status(200).json("user has been created");
    });
  });
};

export const login = (req, res) => {
  const q = "SELECT * FROM users WHERE username= ? ";

  db.query(q, [req.body.username], (err, data) => {
    if (err) res.json(err);
    if (!data.length) return res.status(404).json("User not found");

    const hashedPwd = data[0].password;
    const match = bcrypt.compareSync(req.body.password, hashedPwd);
    if (!match) return res.status(404).json("User not found");
    const token = jwt.sign({ id: data[0].id }, "jwtkey");
    const { password, ...others } = data[0];
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(others);
    // if (data.length) {
    //   const hashedPwd = data[0].password;
    //   const match = bcrypt.compareSync(req.body.password, hashedPwd);

    //   const token = jwt.sign({ id: data[0].id }, "jwtkey");
    //   const { password, ...others } = data[0];
    //   res
    //     .cookie("access_token", token, { httpOnly: true })
    //     .status(200)
    //     .json(others);
    //   if (match) {
    //     return res.status(200).json(data);
    //   } else {
    //     return res.status(400).json({ message: "Wrong username or password" });
    //   }
    // }
  });
};

export const logout = (req, res) => {};
