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

     "photo": "/managers/sam.jpg", // square ratio recommended (no larger than 500x500)

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

     "photo": "/managers/matt.jpg", // square ratio recommended (no larger than 500x500)

     "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football

     "favoriteTeam": "jax", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE

     "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)

     "rival": {

       name: "Sam", // Can be anything (usually your rival's name)

       link: 6, // manager array number within this array, or null to link back to all managers page

       image: "/managers/sam.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'

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

        image: "/managers/sam.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'

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

      "photo": "/managers/mom.jpg", // square ratio recommended (no larger than 500x500)

      "fantasyStart": 2022, // (optional) when did the manager start playing fantasy football

      "favoriteTeam": "phi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE

      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)

      "rival": {

        name: "Dad", // Can be anything (usually your rival's name)

        link: 6, // manager array number within this array, or null to link back to all managers page

        image: "/managers/dad.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'

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

      "bio": "From the fields of northern France to the football fields of the New World, THE ANDRES THE GIANTS have found nonpareil success as immense as themselves in their every athletic venture.Helmed by renowned fantasy coach Frank “Vizzini” Desiderio, this all star lineup is such a *world* class act, you’ll be honored to watch your team serve as their pavement",

      "photo": "/managers/frank.jpg", // square ratio recommended (no larger than 500x500)

      "fantasyStart": 2013, // (optional) when did the manager start playing fantasy football

      "favoriteTeam": "phi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE

      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)

      "rival": {

        name: "Melissa", // Can be anything (usually your rival's name)

        link: 6, // manager array number within this array, or null to link back to all managers page

        image: "/managers/melissa.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'

      },

      "favoritePlayer": 4017, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)

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

      "location": "Downingtown", // (optional)

      "bio": "I'm too cool to write a bio",

      "photo": "/managers/melissa.jpg", // square ratio recommended (no larger than 500x500)

      "fantasyStart": 2021, // (optional) when did the manager start playing fantasy football

      "favoriteTeam": "pit", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE

      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)

      "rival": {

        name: "Frank", // Can be anything (usually your rival's name)

        link: 6, // manager array number within this array, or null to link back to all managers page

        image: "/managers/frank.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'

      },

      "favoritePlayer": 10902, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)

      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)

      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)

      "philosophy": "I'm too cool to send one to matt", // (optional)

      "tradingScale": 7, // 1 - 10 (optional)

      "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template

    },

        {

      "roster": 7,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)

      "managerID": "738149263577636864",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)

      "name": "Tyler Lawson",

      "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise

      "location": "My Couch - PA", // (optional)

      "bio": "A little confused but trying my best",

      "photo": "/managers/tyler.jpg", // square ratio recommended (no larger than 500x500)

      "fantasyStart": 2022, // (optional) when did the manager start playing fantasy football

      "favoriteTeam": "kc", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE

      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)

      "rival": {

        name: "Frank", // Can be anything (usually your rival's name)

        link: 4, // manager array number within this array, or null to link back to all managers page

        image: "/managers/frank.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'

      },

      "favoritePlayer": 1466, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)

      "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)

      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)

      "philosophy": "Eat as much buffalo chicken dip as you can each time someome invites you to watch the game.", // (optional)

      "tradingScale": 1, // 1 - 10 (optional)

      "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template

    },

        {

      "roster": 8,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)

      "managerID": "870091388984025088",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)

      "name": "Skylar Vilaychithc",

      "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise

      "location": "Harrisburg", // (optional)

      "bio": "A bunch of hungry dawgs that are gonna play in the trenches",

      "photo": "/managers/skylar.jpg", // square ratio recommended (no larger than 500x500)

      "fantasyStart": 2020, // (optional) when did the manager start playing fantasy football

      "favoriteTeam": "ne", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE

      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)

      "rival": {

        name: "Julia", // Can be anything (usually your rival's name)

        link: 8, // manager array number within this array, or null to link back to all managers page

        image: "/managers/julia.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'

      },

      "favoritePlayer": 4217, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)

      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)

      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)

      "philosophy": "All gas no brakes.", // (optional)

      "tradingScale": 4, // 1 - 10 (optional)

      "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template

    },

        {

      "roster": 9,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)

      "managerID": "870450099619278848",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)

      "name": "Julia Wilcox",

      "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise

      "location": "West Chester", // (optional)

      "bio": "The bigger the better",

      "photo": "/managers/julia.jpg", // square ratio recommended (no larger than 500x500)

      "fantasyStart": 2022, // (optional) when did the manager start playing fantasy football

      "favoriteTeam": "phi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE

      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)

      "rival": {

        name: "Skylar", // Can be anything (usually your rival's name)

        link: 6, // manager array number within this array, or null to link back to all managers page

        image: "/managers/skylar.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'

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

      "bio": "I was also too cool to answer",

      "photo": "/managers/john.jpg", // square ratio recommended (no larger than 500x500)

      "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football

      "favoriteTeam": "nyg", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE

      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)

      "rival": {

        name: "Everyone", // Can be anything (usually your rival's name)

        link: 6, // manager array number within this array, or null to link back to all managers page

        image: "/managers/everyone.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'

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

      "location": "The Matrix, Allentown", // (optional)

      "bio": "Draft suspended now to suspend the pain on my opponents later.",

      "photo": "/managers/andy.jpg", // square ratio recommended (no larger than 500x500)

      "fantasyStart": 2015, // (optional) when did the manager start playing fantasy football

      "favoriteTeam": "phi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE

      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)

      "rival": {

        name: "Tyler & Mer", // Can be anything (usually your rival's name)

        link: 6, // manager array number within this array, or null to link back to all managers page

        image: "/managers/mer.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'

      },

      "favoritePlayer": 4195, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)

      "valuePosition": "K", // (optional) Favorite position (QB, WR, RB, TE, etc.)

      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)

      "philosophy": "Wait dilligently for my opponents players to not catch the ball", // (optional)

      "tradingScale": 6, // 1 - 10 (optional)

      "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template

    },

        {

      "roster": 12,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)

      "managerID": "739251210330230784",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)

      "name": "Mel Lawson",

      "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise

      "location": "Allentown", // (optional)

      "bio": "Defense and Blood make Champions",

      "photo": "/managers/dad.jpg", // square ratio recommended (no larger than 500x500)

      "fantasyStart": 2023, // (optional) when did the manager start playing fantasy football

      "favoriteTeam": "pit", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE

      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)

      "rival": {

        name: "Mom", // Can be anything (usually your rival's name)

        link: 6, // manager array number within this array, or null to link back to all managers page

        image: "/managers/mom.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'

      },

      "favoritePlayer": 8160, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)

      "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)

      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)

      "philosophy": "Hit them harder then they hit you. Make them fear you.", // (optional)

      "tradingScale": 0, // 1 - 10 (optional)

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
    
