/*   STEP 1   */
export const leagueID = "962475073242275840"; // your league ID
export const leagueName = "Patty’s Pub Fantasy Football Gang"; // your league name
export const dues = 20; // (optional) used in template constitution page
export const dynasty = false; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = true; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>Welcome to the Patty's Pub Fantasy Football Website! Here you can check out power rankings, news, blogs (coming soon), manager pages (coming soon), rivalries, records, matchups, and more!.</p>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
{

     "roster": 1,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)

     "managerID": "441997831335571456",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)

     "name": "Sam Schmitt",

     "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise

     "location": "Allentown", // (optional)

     "bio": "Just a couple guys bein dudes",

     "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)

     "fantasyStart": 2016, // (optional) when did the manager start playing fantasy football

     "favoriteTeam": "phi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE

     "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)

     "rival": {

       name: "Matt", // Can be anything (usually your rival's name)

       link: 6, // manager array number within this array, or null to link back to all managers page

       image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'

     },

     "favoritePlayer": 6904, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)

     "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)

     "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)

     "philosophy": "Score points or go in the dungeon", // (optional)

     "tradingScale": 7, // 1 - 10 (optional)

     "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template

   },

   {

     "roster": 2,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)

     "managerID": "444940031451197440",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)

     "name": "Matt Lawson",

     "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise

     "location": "Schnecksville", // (optional)

     "bio": "Profit is sweet, even if it comes from deception",

     "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)

     "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football

     "favoriteTeam": "jax", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE

     "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)

     "rival": {

       name: "Sam", // Can be anything (usually your rival's name)

       link: 6, // manager array number within this array, or null to link back to all managers page

       image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'

     },

     "favoritePlayer": 7523, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)

     "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)

     "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)

      "philosophy": "Let's just get top 5 this year", // (optional)

      "tradingScale": 10, // 1 - 10 (optional)

      "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template

    },

    {

      "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)

      "managerID": "611402366717321216",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)

      "name": "Meredith Hartman",

      "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise

      "location": "Allentown", // (optional)

      "bio": "Trying our best",

      "photo": "/managers/mer.jpg", // square ratio recommended (no larger than 500x500)

      "fantasyStart": 2019, // (optional) when did the manager start playing fantasy football

      "favoriteTeam": "lar", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE

      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)

      "rival": {

        name: "Sam", // Can be anything (usually your rival's name)

        link: 6, // manager array number within this array, or null to link back to all managers page

        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'

      },

      "favoritePlayer": 2227, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)

      "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)

      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)

      "philosophy": "Wait until the absolute last minute to set my line up and go with what feels right.", // (optional)

      "tradingScale": 1, // 1 - 10 (optional)

      "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template

    },

    {

      "roster": 4,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)

      "managerID": "736772908076183552",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)

      "name": "Christine Smith",

      "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise

      "location": "PA", // (optional)

      "bio": "Strong QB/RB...weak WR. May be my downfall.",

      "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)

      "fantasyStart": 2022, // (optional) when did the manager start playing fantasy football

      "favoriteTeam": "phi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE

      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)

      "rival": {

        name: "Dad", // Can be anything (usually your rival's name)

        link: 6, // manager array number within this array, or null to link back to all managers page

        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'

      },

      "favoritePlayer": 4866, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)

      "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)

      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)

      "philosophy": "Will trade for a WR", // (optional)

      "tradingScale": 6, // 1 - 10 (optional)

      "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template

    },

    {

      "roster": 5,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)

      "managerID": "738126753045815296",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)

      "name": "Frank Desiderio",

      "tookOver": 2013, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise

      "location": "Coulommiers, France", // (optional)

      "bio": "Froment. Anybody want a peanut?",

      "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)

      "fantasyStart": 2013, // (optional) when did the manager start playing fantasy football

      "favoriteTeam": "phi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE

      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)

      "rival": {

        name: "Melissa", // Can be anything (usually your rival's name)

        link: 6, // manager array number within this array, or null to link back to all managers page

        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'

      },

      "favoritePlayer": 9225, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)

      "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)

      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)

      "philosophy": "Show me someone who says winning isn't everything and I'll show you a loser.", // (optional)

      "tradingScale": 3, // 1 - 10 (optional)

      "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template

    },

    {

      "roster": 6,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)

      "managerID": "738128469245968384",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)

      "name": "Melissa Desiderio",

      "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise

      "location": "Brooklyn", // (optional)

      "bio": "Lorem ipsum...",

      "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)

      "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football

      "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE

      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)

      "rival": {

        name: "Rival", // Can be anything (usually your rival's name)

        link: 6, // manager array number within this array, or null to link back to all managers page

        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'

      },

      "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)

      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)

      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)

      "philosophy": "Your fantasy team's philosophy", // (optional)

      "tradingScale": 10, // 1 - 10 (optional)

      "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template

    },

        {

      "roster": 7,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)

      "managerID": "738149263577636864",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)

      "name": "Tyler Lawson",

      "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise

      "location": "Brooklyn", // (optional)

      "bio": "Lorem ipsum...",

      "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)

      "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football

      "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE

      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)

      "rival": {

        name: "Rival", // Can be anything (usually your rival's name)

        link: 6, // manager array number within this array, or null to link back to all managers page

        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'

      },

      "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)

      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)

      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)

      "philosophy": "Your fantasy team's philosophy", // (optional)

      "tradingScale": 10, // 1 - 10 (optional)

      "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template

    },

        {

      "roster": 8,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)

      "managerID": "870091388984025088",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)

      "name": "Skylar Vilaychithc",

      "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise

      "location": "Brooklyn", // (optional)

      "bio": "Lorem ipsum...",

      "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)

      "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football

      "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE

      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)

      "rival": {

        name: "Rival", // Can be anything (usually your rival's name)

        link: 6, // manager array number within this array, or null to link back to all managers page

        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'

      },

      "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)

      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)

      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)

      "philosophy": "Your fantasy team's philosophy", // (optional)

      "tradingScale": 10, // 1 - 10 (optional)

      "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template

    },

        {

      "roster": 9,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)

      "managerID": "870450099619278848",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)

      "name": "Julia Wilcox",

      "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise

      "location": "Brooklyn", // (optional)

      "bio": "Lorem ipsum...",

      "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)

      "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football

      "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE

      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)

      "rival": {

        name: "Rival", // Can be anything (usually your rival's name)

        link: 6, // manager array number within this array, or null to link back to all managers page

        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'

      },

      "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)

      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)

      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)

      "philosophy": "Your fantasy team's philosophy", // (optional)

      "tradingScale": 10, // 1 - 10 (optional)

      "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template

    },

        {

      "roster": 10,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)

      "managerID": "872692356380577792",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)

      "name": "John Swontiak",

      "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise

      "location": "Brooklyn", // (optional)

      "bio": "Lorem ipsum...",

      "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)

      "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football

      "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE

      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)

      "rival": {

        name: "Rival", // Can be anything (usually your rival's name)

        link: 6, // manager array number within this array, or null to link back to all managers page

        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'

      },

      "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)

      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)

      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)

      "philosophy": "Your fantasy team's philosophy", // (optional)

      "tradingScale": 10, // 1 - 10 (optional)

      "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template

    },

        {

      "roster": 11,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)

      "managerID": "988183451339677696",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)

      "name": "Andy Wilpizelski",

      "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise

      "location": "Brooklyn", // (optional)

      "bio": "Lorem ipsum...",

      "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)

      "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football

      "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE

      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)

      "rival": {

        name: "Rival", // Can be anything (usually your rival's name)

        link: 6, // manager array number within this array, or null to link back to all managers page

        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'

      },

      "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)

      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)

      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)

      "philosophy": "Your fantasy team's philosophy", // (optional)

      "tradingScale": 10, // 1 - 10 (optional)

      "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template

    },

        {

      "roster": 12,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)

      "managerID": "739251210330230784",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)

      "name": "Dad Lawson",

      "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise

      "location": "Brooklyn", // (optional)

      "bio": "Lorem ipsum...",

      "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)

      "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football

      "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE

      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)

      "rival": {

        name: "Rival", // Can be anything (usually your rival's name)

        link: 6, // manager array number within this array, or null to link back to all managers page

        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'

      },

      "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)

      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)

      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)

      "philosophy": "Your fantasy team's philosophy", // (optional)

      "tradingScale": 10, // 1 - 10 (optional)

      "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template

    },
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    
