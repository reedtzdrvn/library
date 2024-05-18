from fastapi import FastAPI

app = FastAPI(root_path="/v1")


@app.get("/")
async def hello_world() -> dict:
    return {"message": "hello world"}
