# src/kurmann_monatsziele/app.py

import typer
from goals.app import app as goals_app

app = typer.Typer(help="Kurmann Monatsziele CLI")

# Registrieren des Submoduls 'goals' als Kommando
app.add_typer(goals_app, name="goals")

if __name__ == "__main__":
    app()
