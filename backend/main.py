# my-portfolio-backend/main.py
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Message(BaseModel):
    message: str

@app.get("/", response_model=Message)
def read_root():
    return {"message": "Welcome to My Portfolio API"}
