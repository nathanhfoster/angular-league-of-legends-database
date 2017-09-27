
var nathanApp = angular.module('nathan-app', []);

console.log('nathan angular app: ', nathanApp);

nathanApp.controller('first', ['$scope', function($scope) {
  console.log('register first controller.');

  $scope.sortType     = 'name'; // set the default sort type
  $scope.sortReverse  = false;  // set the default sort order
  $scope.searchFish   = '';     // set the default search/filter term

  $scope.searchChampions = function(champ) {
    if (!$scope.query || (champ.name.toLowerCase().indexOf($scope.query.toLowerCase()) != -1) 
                      || (champ.role.toLowerCase().indexOf($scope.query.toLowerCase()) != -1) 
                      || (champ.rpPrice == $scope.query)
                      || (champ.ipPrice == $scope.query)
                    ){
        return true;
    }
    return false;
};

$scope.checkBoxRoles = [
  {role:'Assassian', selected:true}, 
  {role:'Fighter', selected:true},
  {role:'Mage', selected:true},
  {role:'Support', selected:true},
  {role:'Tank', selected:true},
  {role:'Marksman', selected:true}
];

$scope.toggleAll = function() {
  console.log($scope.isAllSelected);
  var toggleStatus = !$scope.isAllSelected;
  $scope.checkBoxRoles.forEach(function(item){
    item.selected = $scope.isAllSelected;
    $scope.champions.forEach(function(champ) {
      champ.active = $scope.isAllSelected;
  });
  });

}

$scope.optionToggled = function(){
 $scope.isAllSelected = $scope.checkBoxRoles.every(function(itm){ return itm.selected; });
}

$scope.checkBoxRole = function(checkBoxRole) {
  console.log(checkBoxRole);
  $scope.champions.forEach(function(champ) {
    if(checkBoxRole.toLowerCase().indexOf(champ.role.toLowerCase()) != -1){
      champ.active = !champ.active;
    }
  });
};

$scope.sortBy = function(propertyName) {
  $scope.reverse = (propertyName !== null && $scope.propertyName === propertyName)
      ? !$scope.reverse : false;
  $scope.propertyName = propertyName;
  $scope.friends = orderBy(friends, $scope.propertyName, $scope.reverse);
};

  $scope.champions = [
    
    
      {name: 'Ahri', pictureURL: 'http://eskipaper.com/images/ahri-league-of-legends-art-1.jpg', videoURL: 'https://www.youtube.com/embed/hlalkAUkwqE', 
        role: 'Mage', rpPrice: 880, ipPrice: 4800, winRate: 52.55, banRate: 0.83, active: true, id: 'Mage'},
  
        {name: 'Braum', pictureURL: 'http://art-of-lol.com/wp-content/uploads/2016/05/Braum-League-Of-Legends-Wallpapers-HD-1920x1080-1.jpg', videoURL: 'https://youtu.be/ajUghBnxZQA', 
        role: 'Support', rpPrice: 6300, ipPrice: 975, winRate: 52.55, banRate: 0.83, active: true },
        
        {name: 'Diana', pictureURL: 'https://i.ytimg.com/vi/zfjKdE-P58M/maxresdefault.jpg', videoURL: 'https://www.youtube.com/embed/H7WSLWcACiw', 
        role: 'Assassian', rpPrice: 975, ipPrice: 6300, winRate: 48.61, banRate: 2.39, active: true },
  
        {name: 'Janna', pictureURL: 'https://images.alphacoders.com/585/585389.jpg', videoURL: 'https://www.youtube.com/embed/tlHpXy_VNpE', 
        role: 'Support', rpPrice: 585, ipPrice: 1350, winRate: 55.40, banRate: 0.83, active: true, id: 'Mage'},
  

        {name: 'Kindred', pictureURL: 'https://images4.alphacoders.com/641/641848.jpg', videoURL: 'https://youtu.be/h0Pwn7G-eLE', 
        role: 'Marksman', rpPrice: 975, ipPrice: 6300, winRate: 52.6, banRate: 47.3, active: true },

        {name: 'Kled', pictureURL: 'https://images8.alphacoders.com/724/724046.jpg', videoURL: 'https://www.youtube.com/embed/Pz145kVa-4w', 
        role: 'Fighter', rpPrice: 6300, ipPrice: 975, winRate: 52.55, banRate: 0.83, active: true },
  
        {name: 'Lux', pictureURL: 'https://i.ytimg.com/vi/geAAOreLerc/maxresdefault.jpg', videoURL: 'https://youtu.be/pJB6JWDESWU', 
        role: 'Mage', rpPrice: 3150, ipPrice: 790, winRate: 49.59, banRate: 0.37, active: true },
  
        {name: 'Pantheon', pictureURL: 'http://orig13.deviantart.net/3d5c/f/2014/114/0/c/dragonslayer_pantheon_in_hd_resolution_1920x1080_by_elderwraith-d7fuaug.png', videoURL: 'https://youtu.be/h2yjpxzTNvs', 
        role: 'Assassian', rpPrice: 3150, ipPrice: 790, winRate: 52.93, banRate: 0.7, active: true },
    
        {name: 'Sion', pictureURL: 'https://images.alphacoders.com/687/687881.jpg', videoURL: 'https://youtu.be/4mWWFC9SRfA', 
        role: 'Tank', rpPrice: 585, ipPrice: 1350, winRate: 52.65, banRate: 0.08, active: true },
  
        {name: 'Soraka', pictureURL: 'https://i.ytimg.com/vi/Qjj11vyZyDA/maxresdefault.jpg', videoURL: 'https://youtu.be/KJ6f1nsoUTs', 
        role: 'Support', rpPrice: 260, ipPrice: 450, winRate: 51.96, banRate: 4.46, active: true },
  
        {name: 'Vayne', pictureURL: 'https://images8.alphacoders.com/536/536429.png', videoURL: 'https://youtu.be/gZDJqpFspmg', 
        role: 'Marksman', rpPrice: 880, ipPrice: 4800, winRate: 48.92, banRate: 4.56, active: true },
  
        {name: 'Zed', pictureURL: 'https://images2.alphacoders.com/524/524240.jpg', videoURL: 'https://youtu.be/2DFtlNGzMIA', 
        role: 'Assassian', rpPrice: 6300, ipPrice: 975, winRate: 46.4, banRate: 77.8, active: true }
    ];


  $scope.nflteams = [
    {city: 'Chicago', name: 'Da Bears', players: ['dave', 'tom'], active: true, cool: true},
    {city: 'San Fransico', name: '49ers', active: true, cool: false},
    {city: 'Miami', name: 'Dolphins', active: true, cool: false},
    {city: 'Pittsburg', name: 'Steel Curtain', active: true, cool: true}
  ];

  $scope.restore = function(event) {
    $scope.nflteams.forEach(function(dateam) {
      dateam.active = true;
    });
  };

  $scope.cool = function() {
    $scope.nflteams.forEach(function(theteam) {
      if (theteam.cool) {
        theteam.active = true;
      } else {
        theteam.active = false;
      }
    })
  }

}
]);