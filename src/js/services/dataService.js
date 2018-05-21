angular.module('testApp').service('dataStore', function ($q) {
    var source = ['linkedin', 'github', 'naukri', 'shine', 'career portal'];
    var city = ['bangalore', 'kolkata', 'New Delhi', 'noida', 'hyderabad', 'pune'];

    var data = [
        {
            name: 'User 1',
            source: 'linkedin',
            city: 'bangalore',
            skills: ['angular js', 'html']
        }, {
            name: 'User 2',
            source: 'naukri',
            city: 'pune',
            skills: ['angular js', 'html']
        }, {
            name: 'User 3',
            source: 'naukri',
            city: 'bangalore',
            skills: ['angular js', 'html']
        }, {
            name: 'User 4',
            source: 'linkedin',
            city: 'New Delhi',
            skills: ['angular js', 'html']
        }, {
            name: 'User 5',
            source: 'shine',
            city: 'hyderabad',
            skills: ['angular js', 'html']
        }, {
            name: 'User 6',
            source: 'career portal',
            city: 'kolkata',
            skills: ['angular js', 'html']
        }, {
            name: 'User 7',
            source: 'github',
            city: 'bangalore',
            skills: ['angular js', 'html']
        }, {
            name: 'User 8',
            source: 'linkedin',
            city: 'noida',
            skills: ['angular js', 'html']
        }
    ];
    this.getSource = function () {
        return angular.copy(source);
    };
    this.getCity = function () {
        return angular.copy(city);
    }
    this.getData = function () {
        return angular.copy(data);
    }
    this.setUserData = function (skillSets, source, city) {
        localStorage.setItem('skillSets', skillSets);
        localStorage.setItem('source', source);
        localStorage.setItem('city', city);
    };
    this.getUserData = function () {
        return {
            skills: localStorage.getItem('skillSets'),
            src: localStorage.getItem('source'),
            city: localStorage.getItem('city')
        }
    }
    this.getSummary = function (data) {
        var filter = this.getUserData(),
            rows = [];
        angular.forEach(this.getData(), function (obj) {
            if (obj.skills.includes(filter.skills.toLowerCase()) && obj.source === filter.src.toLowerCase() && obj.city === filter.city.toLowerCase()) {
                var object = angular.copy(obj);
                object.skills = filter.skills;
                rows.push(object);
            }
        });
        return rows;
    };
});