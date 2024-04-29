import { database } from "./db.js";

export async function insertOne(data) {
  const query = `INSERT INTO attendees(first_name, last_name, email, phone, affiliation, registered_on) VALUES(?,?,?,?,?,?)`;
  const exist = `SELECT * FROM attendees WHERE (first_name = ? AND last_name = ?) OR email = ?`;
  try {
    await database.beginTransaction();
    const [rows] = await database.query(exist, [
      data.firstName,
      data.lastName,
      data.email,
    ]);
    if (rows.length > 0) {
      return {
        stat: false,
        message: "You have already registered for the event champ!",
      };
    }
    await database.query(query, [
      data.firstName,
      data.lastName,
      data.email,
      data.phone,
      data.role,
      NOW(),
    ]);
    await database.commit();
    return { stat: true, message: "Registration successful!" };
  } catch (err) {
    await database.rollback();
    console.log(err);
    return {
      stat: false,
      message: "Error occured while registering you buddy!",
    };
  }
}

export async function getAll() {
  try {
    await database.beginTransaction();
    const [rows] = await database.query("SELECT * FROM attendees");
    await database.commit();
    return rows;
  } catch (err) {
    await database.rollback();
    console.log(err);
    return {
      stat: false,
      message: "There's a problem fetching attendees!",
    };
  }
}

export async function removeOne(id) {
  try {
    await database.beginTransaction();
    await database.query(`DELETE FROM attendees WHERE id = ?`, [id]);
    await database.commit();
    return { stat: true, message: "Attendee deleted successfully!" };
  } catch (err) {
    await database.rollback();
    console.log(err);
    return {
      stat: false,
      message: "Error occured while deleting attendee!",
    };
  }
}

export async function insertMail(email) {
  const query = `INSERT INTO newsletter(email, subscribed_on) VALUES(?,?)`;
  try {
    await database.query(query, [email, NOW()]);
    await database.commit();
    return { stat: true, message: "Subscription successful!" };
  } catch (err) {
    await database.rollback();
    console.log(err);
    return {
      stat: false,
      message: "Error occured while creating subscription!",
    };
  }
}
