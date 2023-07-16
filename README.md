# MapUp_Assignment

# API Endpoint:
** The API provides a single endpoint /api/intersect to handle the POST requests.

# Authentication:
The API is protected with header-based authentication.
The client needs to include a valid authentication token in the Authorization header of the request.
If the token is missing or invalid, the API returns a 401 Unauthorized error.

# Request Body:
The client sends a POST request to the /api/intersect endpoint with the GeoJSON linestring in the request body.
The linestring represents a series of coordinates that form a line.

# Intersection Calculation:
** The API calculates the intersections between the given linestring and a set of 50 randomly spread lines.
** The set of lines is represented by their start and end coordinates and is stored within the API.
** For each line, the API checks if it intersects with the provided linestring.
** The intersection calculation is performed using the turfjs or turf-go library functions.

# Testing the API:
The API can be tested using tools like Postman or cURL.
Send a POST request to the /api/intersect endpoint with a valid authentication token in the Authorization header.
Include a GeoJSON linestring with 5,000 points in the request body.
Examine the API response to verify if it contains the expected intersections, empty array, or error messages.

# API Response:
# The API returns the following possible responses:
** An empty array ([]), indicating no intersections were found.
** An array of intersecting line IDs along with the corresponding points of intersection.
** An error message with a 5XX status code if the supplied linestring is invalid.

# Given_Question
Please find below the requirements for developing a GoLang / Express-NodeJS application - Intersections API:
* This is a mapping based exercise and so requires integration of turfjs https://turfjs.org/docs/ (For node)
https://pkg.go.dev/github.com/tomchavakis/turf-go#section-readme (For go)
* It should be a POST request, protected with a header based auth check
* The API takes a really long linestring with (5k points) in GeoJSON in the body.
* There are a set of 50 randomly spread lines (just start and end) on the plane.
* The API needs to find which of the 50 lines with ids (L01 - L50) intersect with the linestring

The API should return:
  ** No intersections as an empty array [] OR
  ** Array of intersecting line ids along with the point of intersection. OR
  ** An error message (5XX code) if the supplied linestring is invalid OR
  ** An error message (4XX code) if the supplied req body or auth header are missing/malformed.

Bonus:
  ** If code is written in GoLang
  ** Writing custom package in Golang
  ** Well structured code
  ** Come up with an alternative version of the algorithm finding the intersecting lines and show the timing improvements.

Notes:
  ** Add as many helpful comments as much as possible
  ** Log the incoming requests and errors.
  ** Use esilnt check to adhere to code standards
  ** Include a short README describing what the API does
  ** Specify how the API can be tested with Postman/cURL

You can supply the following:
  ** Source code
  ** Screenshots of output, perf and other functionality.
  ** You can use anyone of http://codesandbox.io/, http://codepen.io/, http://stackblitz.com/ to build and submit your work

Long LineString and scattered lines samples
  download 1: https://bit.ly/3oiCONX
  download 2: https://bit.ly/3krGkTN
