const URL = "https://covid19.mathdro.id/api";




var app = angular.module('myApp', []);


app.controller('myCtrl', function($scope, $http) {
    $scope.title = "Stay Home Stay Safe";
    


    // calling api
    $http.get(URL)
    .then((response) => {
        //success
        // console.log(response.data)
        $scope.all_data = response.data
    },
     (error) => {
         //error
        //  console.log(error)
    });



    // get country data

    $scope.get_country_data = () => {
        let Country = $scope.country;
        if (Country == "") {
            $scope.country_data = undefined
            // $scope.country_data = undefined;
            return;
        }

        $http.get(`${URL}/countries/${Country}`)
        .then((response) => {
            // console.log(response.data)
            $scope.country_data = response.data
        }, 
            (error) => {
                // console.log(error)
            })
    }


});


// let demo = new CountUp('myTargetElement', 6645);
// if (!demo.error) {
//   demo.start();
// } else {
//   console.error(demo.error);
// }