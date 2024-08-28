import click
from .db import add_goal, list_goals, update_goal, delete_goal

@click.group()
def cli():
    """Verwaltung von Zielen."""
    pass

@cli.command()
@click.option('--name', prompt='Zielname', help='Der Name des Ziels.')
@click.option('--description', prompt='Beschreibung', help='Eine optionale Beschreibung des Ziels.')
def create(name, description):
    """Erstellt ein neues Ziel."""
    add_goal(name, description)
    click.echo(f'Ziel "{name}" wurde erstellt.')

@cli.command()
def show():
    """Zeigt alle Ziele an."""
    goals = list_goals()
    for goal in goals:
        click.echo(f'{goal.id}: {goal.name} - {goal.description}')

@cli.command()
@click.argument('goal_id', type=int)
@click.option('--name', help='Neuer Name des Ziels.')
@click.option('--description', help='Neue Beschreibung des Ziels.')
def edit(goal_id, name, description):
    """Bearbeitet ein Ziel."""
    update_goal(goal_id, name, description)
    click.echo(f'Ziel {goal_id} wurde aktualisiert.')

@cli.command()
@click.argument('goal_id', type=int)
def remove(goal_id):
    """Löscht ein Ziel."""
    delete_goal(goal_id)
    click.echo(f'Ziel {goal_id} wurde gelöscht.')
