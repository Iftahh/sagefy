from modules.util import extend
from modules.validations import is_required, is_string, is_one_of
from schemas.card import card_schema


schema = extend({}, card_schema, {
    'fields': {
        'site': {
            'validate': (is_required, is_string, (
                is_one_of, 'youtube', 'vimeo'),),
        },
        'video_id': {
            'validate': (is_required, is_string,),
        }
    }
})
