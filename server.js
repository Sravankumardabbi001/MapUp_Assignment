const express = require('express');
const bodyParser = require('body-parser');
const turf = require('@turf/turf');

const app = express();
const port = 3000;

// Middleware for parsing request bodies
app.use(bodyParser.json());

// Middleware for authentication header check
app.use(authMiddleware);

// API endpoint for finding intersections
app.post('/api/intersect', intersectHandler);

// Authentication middleware
function authMiddleware(req, res, next) {
  // Check the authorization header for valid authentication
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: 'Missing authorization header' });
  }

  // Perform authentication check here, e.g., verify token, etc.
  // Replace the code below with your actual authentication logic
  const validToken = 'your-valid-token';
  const providedToken = authHeader.replace('Bearer ', '');
  if (providedToken !== validToken) {
    return res.status(401).json({ error: 'Invalid authorization token' });
  }

  // Authentication passed, continue to the next middleware
  next();
}

// Intersection handler
function intersectHandler(req, res) {
  // Parse the GeoJSON linestring from the request body
  const { linestring } = req.body;
  if (!linestring || linestring.type !== 'LineString' || !linestring.coordinates) {
    return res.status(400).json({ error: 'Invalid linestring in the request body' });
  }

  // Define the set of 50 randomly spread lines (start and end points)
  const lines = [
    { id: 'L01', start: [1, 2], end: [3, 4] },
    // Add the remaining lines here
    // ...
  ];

  // Find intersecting lines
  const intersections = lines
    .filter((line) => {
      const lineString = turf.lineString([line.start, line.end]);
      return turf.booleanCrosses(linestring, lineString);
    })
    .map((line) => ({
      id: line.id,
      point: turf.lineIntersect(linestring, turf.lineString([line.start, line.end])).features[0].geometry.coordinates,
    }));

  // Send the response
  res.json(intersections);
}

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
