let MyPage;

// const Disivion = localStorage.getItem('Disivion');
const Disivion = 'User';

if (Disivion === 'User') {
    MyPage = require('./MyPage_User').MyPage_User;
} else {
    MyPage = require('./MyPage_Team').MyPage_Team;
}

export { MyPage };
