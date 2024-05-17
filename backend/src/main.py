from fastapi import FastAPI

app = FastAPI()


@app.get("/api/v1")
async def hello_world() -> dict:
    return {"message": "hello world"}