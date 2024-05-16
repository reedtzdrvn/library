# 
FROM python:3.11

# 
WORKDIR /backend

EXPOSE 8000

# 
COPY ./requirements/requirements.txt ./requirements/requirements.txt

# 
RUN pip install --no-cache-dir --upgrade -r ./requirements/requirements.txt

# 
COPY . /backend

# 
CMD ["uvicorn", "src.main:app"]