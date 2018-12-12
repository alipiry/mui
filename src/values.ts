const teams: Array<object> = [
  { name: 'Invisibles', number: 0 },
  { name: 'UT Austin Villa', number: 1 },
  { name: 'Austrian Kangaroos', number: 2 },
  { name: 'Bembelbots', number: 3 },
  { name: 'Berlin United', number: 4 },
  { name: 'B-Human', number: 5 },
  { name: 'Cerberus', number: 6 },
  { name: 'DAInamite', number: 7 },
  { name: 'Dutch Nao Team', number: 8 },
  { name: 'Edinferno', number: 9 },
  { name: 'Kouretes', number: 10 },
  { name: 'MiPal', number: 11 },
  { name: 'Nao Devils Dortmund', number: 12 },
  { name: 'Nao-Team HTWK', number: 13 },
  { name: 'Northern Bites', number: 14 },
  { name: 'NTU RoboPAL', number: 15 },
  { name: 'RoboCanes', number: 16 },
  { name: 'RoboEireann', number: 17 },
  { name: 'UNSW Sydney', number: 18 },
  { name: 'SPQR Team', number: 19 },
  { name: 'TJArk', number: 20 },
  { name: 'UChile Robotics Team', number: 21 },
  { name: 'UPennalizers', number: 22 },
  { name: 'Crude Scientists', number: 23 },
  { name: 'HULKs', number: 24 },
  { name: 'MRL-SPL', number: 26 },
  { name: 'Philosopher', number: 27 },
  { name: 'Rimal Team', number: 28 },
  { name: 'SpelBots', number: 29 },
  { name: 'Team-NUST', number: 30 },
  { name: 'UnBeatables', number: 31 },
  { name: 'UTH-CAR', number: 32 },
  { name: 'NomadZ', number: 34 },
  { name: 'SPURT', number: 33 },
  { name: 'Blue Spider', number: 35 },
  { name: 'Camellia Dragons', number: 36 },
  { name: 'JoiTech-SPL', number: 37 },
  { name: 'Linköping Humanoids', number: 38 },
  { name: 'WrightOcean', number: 39 },
  { name: 'Mars', number: 40 },
  { name: 'Aztlan', number: 41 },
  { name: 'CMSingle', number: 42 },
  { name: 'TeamSP', number: 43 },
  { name: 'Luxembourg United', number: 44 },
  { name: 'Naova ETS', number: 45 },
  { name: 'Recife Soccer', number: 46 },
  { name: 'Rinobot', number: 47 }
];

export let robots: Array<object> = [
  { name: 'Lucas', number: 8 },
  { name: 'Amitis', number: 10 },
  { name: 'Diana', number: 11 },
  { name: 'Leo', number: 12 },
  { name: 'Asha', number: 13 }
];

export const teamsPlain: Array<any> = teams.map((teamObject: any) => {
  return `${teamObject.name} (${teamObject.number})`;
});
export const robotsPlain: Array<any> = robots.map((robotObject: any) => {
  return `${robotObject.name} (${robotObject.number})`;
});

export const colors: Array<String> = [
  'blue',
  'red',
  'yellow',
  'black',
  'white',
  'orange',
  'purple',
  'brown',
  'gray'
];

export let locations: Array<String> = [
  'Default',
  'Lab',
  'NoWiFi',
  'io2018',
  'rc2018'
];

export let wirelessProfiles: Array<String> = [
  'SPL_IO.wpa',
  'SPL_A.wpa',
  'SPL_B.wpa',
  'SPL_C.wpa',
  'SPL_D.wpa',
  'Lab.wpa'
];

export const codeConfig: Array<String> = [
  'Develop',
  'Debug',
  'Release'
];
