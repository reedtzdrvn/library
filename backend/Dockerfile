# 
FROM python:3.11

# 
WORKDIR /backend

# EXPOSE 8000

# 
COPY ./requirements/requirements.txt ./requirements/requirements.txt

# 
RUN pip install --no-cache-dir --upgrade -r ./requirements/requirements.txt

# 
COPY . /backend

FROM nginx:stable-alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d 


# COPY --from=build /frontend/build /usr/share/nginx/html
# CMD ["nginx", "-g", "daemon off;"]

# 
CMD ["sh", "-c", "uvicorn src.main:app & nginx -g 'daemon off;'"]