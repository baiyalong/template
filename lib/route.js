

FlowRouter.route('/admin', {
    name: 'admin',
    action(params, queryParams) {
        console.log("admin", params, queryParams);
    }
});



var routes = Route.find().fetch();
route.forEach(function (e) {
    FlowRouter.route(e.route, {
        action: function (params) {
            BlazeLayout.render(e.layout, {
                content: e.content,
                params: params
            });
        }
    });
})
