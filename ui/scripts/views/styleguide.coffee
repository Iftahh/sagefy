$ = require('jquery')
PageView = require('./page')
t = require('../../templates/sections/styleguide/index')
t2 = require('../../templates/sections/styleguide/compiled')
mixins = require('../modules/mixins')

class StyleguideView extends PageView
    id: 'styleguide'
    className: 'max-width-10'
    template: t
    template2: t2
    title: 'Style Guide and Component Library'

    events: {
        'click a[href="#"]': 'cancel'
        'click a[href*="//"]': 'openInNewWindow'
    }

    beforeRender: ->
        # Add both base template and Styleguide compiled HTML
        @templateData = {html: @template2()}

    # Empty-ish links should go nowhere when clicked
    cancel: ->
        return false

    # External links should automatically open in a new window
    openInNewWindow: (e) ->
        $target = $(e.target).closest('a')
        $target[0].target = '_blank'

module.exports = StyleguideView
