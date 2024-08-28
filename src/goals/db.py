from .models import session, Goal

def add_goal(name, description=None):
    goal = Goal(name=name, description=description)
    session.add(goal)
    session.commit()

def list_goals():
    return session.query(Goal).all()

def get_goal_by_id(goal_id):
    return session.query(Goal).filter(Goal.id == goal_id).first()

def update_goal(goal_id, name=None, description=None):
    goal = get_goal_by_id(goal_id)
    if name:
        goal.name = name
    if description:
        goal.description = description
    session.commit()

def delete_goal(goal_id):
    goal = get_goal_by_id(goal_id)
    session.delete(goal)
    session.commit()
