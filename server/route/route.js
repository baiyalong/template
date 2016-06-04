Route.attachSchema(new SimpleSchema({
    route: {
        type: String
    },
    layout: {
        type: String
    },
    content: {
        type: String
    },
    background: {
        type: Boolean
    }
}));

Route.deny({
    insert() { return true; },
    update() { return true; },
    remove() { return true; },
});


Meteor.publish('route', function () {
    return Route.find()
})

Meteor.methods({
    'route.insert': function (route) {
        if (this.userId)
            return Route.insert(route)
    },
    'route.update': function (route) {
        if (this.userId)
            return Route.update(route._id, { $set: route })
    },
    'route.remove': function (_id) {
        if (this.userId)
            return Route.remove(_id)
    },
})