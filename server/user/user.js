


Meteor.publish('user', function () {
    if (this.userId)
        return Meteor.users.find()
})


Meteor.methods({
    'user.insert': function (user) {
        if (this.userId) {
            var _id = Accounts.createUser({
                username: user.username,
                password: user.password,
            })
            Roles.addUsersToRoles(_id, user.role)
        }
    },
    'user.update': function (user) {
        if (this.userId) {
            var uu = Meteor.users.findOne(user._id);
            if (user.username && uu.username != user.username) Accounts.setUsername(user._id, user.username);
            if (user.password) Accounts.setPassword(user._id, user.password);
            if (user.role && uu.roles[0] != user.role) Roles.setUserRoles(user._id, user.role);
        }
    },
    'user.remove': function (_id) {
        if (this.userId)
            return Meteor.users.remove(_id);
    },
})