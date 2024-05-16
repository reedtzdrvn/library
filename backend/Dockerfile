# 
FROM python:3.11

# 
WORKDIR /backend

# 
COPY ./requirements/requirements.txt ./requirements/requirements.txt

# 
RUN pip install --no-cache-dir --upgrade -r /requirements/requirements.txt

# 
COPY . /backend

# 
CMD ["uvicorn", "backend.src.main:app", "--host", "0.0.0.0", "--port", "80"]