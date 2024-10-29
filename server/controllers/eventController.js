// controllers/eventController.js
const prisma = require('../db');

const createEvent = async (req, res) => {
  const { title, description, day } = req.body;
  const userId = req.user.userId;

  const eventDateTime = parseInt(day);
  // const eventDateTime = new Date(`${eventDate}T${eventTime}`);
  // if (isNaN(eventDateTime)) {
  //   return res.status(400).json({ error: 'Invalid date or time format' });
  // }


  try {
    await prisma.event.create({
      data: {
        title,
        description,
        day : eventDateTime,
        userId,
      },
    });
    res.status(200).send('Event created');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error creating event');
  }
};

const getEvents = async (req, res) => {
  const userId = req.user.userId;
  try{
  const events = await prisma.event.findMany({ where: { userId } });
  const serializedEvents = events.map(event => ({
    ...event,
    day: event.day.toString(),
  }));

  res.json(serializedEvents);
} catch (error) {
  console.error(error);
  res.status(500).send('Error retrieving events');
}
};

// controllers/eventController.js
const updateEvent = async (req, res) => {
  const { id } = req.params;
  const { title, description, day } = req.body;
  const userId = req.user.userId;

  const eventDateTime = parseInt(day);

  if (isNaN(eventDateTime)) {
    return res.status(400).json({ error: 'Invalid date or time format' });
  }

  try {
    await prisma.event.updateMany({
      where: {
        id: parseInt(id, 10),
        userId: userId,
      },
      data: {
        title,
        description,
        day: eventDateTime
      },
    });
    res.status(200).send('Event updated');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error updating event');
  }
};


const deleteEvent = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.userId;

  await prisma.event.deleteMany({
    where: { 
      id: parseInt(id, 10),  // Ensure id is an integer
      userId: userId,
     },
  });
  res.status(200).json({message : 'Event deleted'});
};

module.exports = { createEvent, getEvents, updateEvent, deleteEvent };
