/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 12,
	units: "imperial",
	// serverOnly:  true/false/"local" ,
			     // local for armv6l processors, default 
			     //   starts serveronly and then starts chrome browser
			     // false, default for all  NON-armv6l devices
			     // true, force serveronly mode, because you want to.. no UI on this device
	
	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		
		{
			module: "calendar",
			header: "Hamna's Schedule",
			position: "bottom_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check-o",
						url: "https://calendar.google.com/calendar/ical/noorhamna3%40gmail.com/private-1075a53d170d5653ca1fe8050254a259/basic.ics",
						maximumEntries: 8,
					}
				]
			}
		},
		
		{
			module: "compliments",
			position: "upper_third"
		},/*
		{
			module: "currentweather",
			position: "top_left",
			config: {
				location: "Toronto",
				locationID: "6167865",  //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "df297a42a33a78104a292030630da5cb"
			}
		}, */
		
		{
		  module: "MMM-NowPlayingOnSpotify",
		  position: "top_right",

		  config: {
			clientID: "981cc924693e48a9b8b2e3ee1a645c00",
			clientSecret: "48e3eba95ca3426a9e2179edacb106dd",
			accessToken: "BQBiPHqo-FEoY-HlCrAoe2Y9OWCCSCO9vbmfb7297LlqPt6k6v9ItwRXUr-op8azgimJrlt-nvLcmGbAgKp2ledeN6GcAILDc8iJjT3f1NmIO5ygYrf4jlFuMfVDDYv_nAJtftH6IpJASuCTcvMCP84",
			refreshToken: "AQBXQKQV3acWs-V2eKGLDe22OXDXclvub1ImyQwyIj7ap8Ngao4HUK7mYY4QFvc_X1T7KQnHyZ69h43_Q3KUD-SADU-brjKWzXxJp9SaEQCGfTghq7OgWy7d61jwEmFi95I"
		  }
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
