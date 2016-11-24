from os import path
import json

from krull.core import get_app
from krull.responses import JsonResponse

app = get_app()


@app.endpoint
def get_resume(req):
    '''
    path: /resume
    method: GET
    name: getresume
    '''

    with open(path.join(app.configs.DATA_PATH, 'resume.json')) as f:
        resume_raw = f.read()
    resume_data = json.loads(resume_raw)
    res = JsonResponse(resume_data, status=200)
    return res
