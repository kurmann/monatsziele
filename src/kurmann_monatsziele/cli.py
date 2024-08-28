import click
from goals.cli import cli as goals_cli  # Importiert das CLI-Command für Goals

@click.group()
def cli():
    """Haupt-CLI für Kurmann Monatsziele."""
    pass

# Füge das Subcommand `goals` hinzu
cli.add_command(goals_cli, name="goals")

if __name__ == "__main__":
    cli()
