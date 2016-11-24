from os import path

from krull.core import get_app
from krull.responses import HttpTemplateResponse

app = get_app()


@app.endpoint
def get_main(req):
    '''
    path: /
    method: GET
    name: getmain
    '''
    res = HttpTemplateResponse(app.configs.INDEX_PATH, status=200)
    return res
