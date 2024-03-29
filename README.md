# Lab Project MySecret

Project created during the Full-Stack Journey from 1º Semana DDev.

## Requirements

### API Features

- [ ] The user should create an account with email and password.
- [ ] The user should update their profile, only their name and picture.
- [ ] The user should authenticate in the account.
- [ ] The user should cerate a question.
- [ ] The user should list questions created.
- [ ] The user should remove create a question.
- [ ] The user should answer questions anonymously.
- [ ] Optionally, the user can answer the question with your information.

### Database

- A User can be the author of multiple Questions.
- A User can be the author of multiple Answers.
- A Question has a single User as its author.
- A Question can have multiple Answers.
- An Answer has a single User as its author.
- An Answer belongs to a single Question.

Entities

```text
Users
- userId [uuid, PK]
- name [varchar(255), not null]
- email [varchar(255), not null]
- password [text, not null]
- createdAt [timestamp, default now()]
- updatedAt [timestamp, null]

Questions
- questionId [uuid, PK]
- userId [uuid, FK]
- question [varchar(255), not null]
- createdAt [timestamp, default now()]
- updatedAt [timestamp, null]

Answers
- answerId [uuid, PK]
- questionId [uuid, FK]
- userId [uuid, FK, null]
- answer [varchar(255), not null]
- createdAt [timestamp, default now()]
- updatedAt [timestamp, null]
```

Entity relationships:

```text
Users (ID, ...)
|--< Questions (UserID [FK], ...)
    |-< Answers (UserID [FK], QuestionID [FK], ...)
```
