angular.module('testApp').service('dataStore', function ($q) {
    var source = ['linkedin', 'github', 'naukri', 'shine', 'career portal'];
    var city = ['bangalore', 'kolkata', 'New Delhi', 'noida', 'hyderabad', 'pune'];
    var skills = ['angularjs', 'html', 'css3', 'json', 'restapi'];
    var data = [
        {
            id: 1
            , name: 'User 1'
            , source: 'linkedin'
            , city: 'bangalore'
            , skills: ['angularjs', 'html']
        }, {
            id: 2
            , name: 'User 2'
            , source: 'naukri'
            , city: 'pune'
            , skills: ['angularjs', 'html']
        }, {
            id: 3
            , name: 'User 3'
            , source: 'naukri'
            , city: 'bangalore'
            , skills: ['angularjs', 'html']
        }, {
            id: 4
            , name: 'User 4'
            , source: 'linkedin'
            , city: 'New Delhi'
            , skills: ['angularjs', 'html']
        }, {
            id: 5
            , name: 'User 5'
            , source: 'shine'
            , city: 'hyderabad'
            , skills: ['angularjs', 'html']
        }, {
            id: 6
            , name: 'User 6'
            , source: 'career portal'
            , city: 'kolkata'
            , skills: ['angularjs', 'html']
        }, {
            id: 7
            , name: 'User 7'
            , source: 'github'
            , city: 'bangalore'
            , skills: ['angularjs', 'html']
        }, {
            id: 8
            , name: 'User 8'
            , source: 'linkedin'
            , city: 'noida'
            , skills: ['angularjs', 'html']
        }
    ];
    this.getSource = function () {
        return angular.copy(source);
    };
    this.getCity = function () {
        return angular.copy(city);
    };
    this.getSkills = function () {
        return angular.copy(skills);
    }
    this.getData = function () {
        return angular.copy(data);
    }
    this.setUserData = function (skillSets, source, city) {
        localStorage.setItem('skillSets', JSON.stringify(skillSets));
        localStorage.setItem('source', JSON.stringify(source));
        localStorage.setItem('city', JSON.stringify(city));
    };
    this.getUserData = function () {
        return {
            skills: this.tranfromData(JSON.parse(localStorage.getItem('skillSets')))
            , src: this.tranfromData(JSON.parse(localStorage.getItem('source')))
            , city: this.tranfromData(JSON.parse(localStorage.getItem('city')))
        }
    }
    this.getSummary = function (data) {
        var filter = this.getUserData()
            , rows = [];
        angular.forEach(this.getData(), function (obj) {
            angular.forEach(filter.skills, function (skill) {
                if (obj.skills.includes(skill.toLowerCase()) && filter.src.includes(obj.source.toLowerCase()) && filter.city.includes(obj.city.toLowerCase())) {
                    var object = angular.copy(obj);
                    object.skills = filter.skills.join(' & ');;
                    rows = rows.filter(function (o) {
                        return o.id !== object.id;
                    })
                    rows.push(object);
                }
            })
        })
        return rows;
    };
    this.tranfromData = function (array) {
        var a = [];
        angular.forEach(array, function (obj) {
            a.push(obj.text);
        });
        return a;
    }
});