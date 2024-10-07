```jsx
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

model User {
  id            String      @id @default(cuid())
  email         String      @unique
  password      String
  name          String
  plan          Plan        @default(FREE)
  lifetime      Boolean     @default(false)
  createdAt     DateTime    @default(now())
  teams         Team[]      // A user can belong to multiple teams
  notifications Notification[]
}

model Team {
  id        String    @id @default(cuid())
  name      String
  ownerId   String
  owner     User      @relation(fields: [ownerId], references: [id])
  members   TeamMember[]
  tasks     Task[]
  createdAt DateTime  @default(now())
}

model TeamMember {
  id      String @id @default(cuid())
  teamId  String
  team    Team   @relation(fields: [teamId], references: [id])
  userId  String
  user    User   @relation(fields: [userId], references: [id])
}

model Task {
  id           String     @id @default(cuid())
  title        String
  description  String?
  priority     Priority    @default(MEDIUM)
  dueDate      DateTime?
  teamId       String
  team         Team       @relation(fields: [teamId], references: [id])
  subtasks     Subtask[]
  reminders    Reminder[]
  labels       Label[]
  createdAt    DateTime   @default(now())
}

model Subtask {
  id       String  @id @default(cuid())
  title    String
  done     Boolean @default(false)
  taskId   String
  task     Task    @relation(fields: [taskId], references: [id])
}

model Label {
  id     String @id @default(cuid())
  name   String
  color  String
  tasks  Task[]
}

model Reminder {
  id         String        @id @default(cuid())
  day        DateTime?
  time       DateTime?
  frequency  Frequency      @default(DAILY)
  taskId     String
  task       Task          @relation(fields: [taskId], references: [id])
  notification Notification[]
}

model Notification {
  id           String          @id @default(cuid())
  type         NotificationType
  content      String
  reminderId   String?
  reminder     Reminder?       @relation(fields: [reminderId], references: [id])
  userId       String?
  user         User?           @relation(fields: [userId], references: [id])
}

enum Plan {
  FREE
  SINGLE
  MULTIPLE
}

enum Priority {
  LOW
  MEDIUM
  HIGH
}

enum Frequency {
  DAILY
  WEEKLY
  MONTHLY
  CUSTOM
}

enum NotificationType {
  WEB
  EMAIL
  PHONE
  WHATSAPP
}

model Gamification {
  id         String @id @default(cuid())
  userId     String
  user       User   @relation(fields: [userId], references: [id])
  points     Int    @default(0)
  streak     Int    @default(0)
  createdAt  DateTime @default(now())
}

```