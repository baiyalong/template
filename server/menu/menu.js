Menu.attachSchema(new SimpleSchema({
    name: {
        type: String
    },
    code: {
        type: String
    },
    sn: {
        type: Number,
        min: 1
    },
    level: {
        type: Number,
        min: 1
    },
    parentId: {
        type: String,
        optional: true
    },
    background: {
        type: Boolean
    }
}));

Menu.deny({
    insert() { return true; },
    update() { return true; },
    remove() { return true; },
});


Meteor.publish('menu', function () {
    return Menu.find()
})

Meteor.methods({
    'menu.insert': function (menu) {
        if (this.userId)
            return Menu.insert(menu)
    },
    'menu.update': function (menu) {
        if (this.userId)
            return Menu.update(route._id, { $set: menu })
    },
    'menu.remove': function (_id) {
        if (this.userId)
            return Menu.remove(_id)
    },
})