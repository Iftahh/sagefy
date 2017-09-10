/* eslint-disable max-len */
const {
    div,
    h1,
    a,
    p,
} = require('../../modules/tags')

module.exports = () => {
    return div(
        {
            id: 'suggest',
            className: 'page',
        },
        h1('The Suggest Page is Down Temporarily'),
        p(
            'A new Suggest page with more capabilities is in progress. ',
            'If you have ideas for free online learning courses, ',
            'you can share your idea on our ',
            a(
                { href: 'https://sagefy.uservoice.com/forums/233394-general' },
                'UserVoice forum'
            ),
            '.'
        )
    )
}