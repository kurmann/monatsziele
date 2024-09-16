# src/goals/app.py

import typer
from typing import Optional

app = typer.Typer(help="Verwaltung von Zielen")

MAX_TITLE_LENGTH = 50  # Maximale Zeichenanzahl für den Kurztitel

@app.command()
def add(
    title: str = typer.Argument(..., help="Kurztitel des Ziels"),
    description: Optional[str] = typer.Option(None, "--description", "-d", help="Beschreibung des Ziels")
):
    """
    Fügt ein neues Ziel hinzu.
    """
    if len(title) > MAX_TITLE_LENGTH:
        typer.echo(f"❌ Der Titel ist zu lang. Maximal erlaubte Zeichenanzahl: {MAX_TITLE_LENGTH}")
        raise typer.Exit(code=1)
    
    # Hier können Sie die Logik zum Speichern des Ziels hinzufügen
    # Zum Beispiel in einer Datenbank oder einer Datei
    typer.secho("✅ Neues Ziel hinzugefügt:", fg=typer.colors.GREEN)
    typer.echo(f"- Titel: {title}")
    if description:
        typer.echo(f"- Beschreibung: {description}")
    else:
        typer.echo("- Keine Beschreibung angegeben.")

if __name__ == "__main__":
    app()
