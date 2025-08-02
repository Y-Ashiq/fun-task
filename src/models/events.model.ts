import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  Index,
} from 'typeorm';
import { User } from './users.model';

export type EventStatus = 'pending' | 'executed';

@Entity('events')
@Index('idx_events_user_id', ['user'])
@Index('idx_events_execute_at', ['executeAt'])
export class Event {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, user => user.events, { nullable: false, onDelete: 'CASCADE' })
  user: User;

  @Column({ type: 'text', nullable: false })
  eventName: string;

  @Column({ type: 'timestamptz', nullable: false })
  executeAt: Date;

  @Column({
    type: 'text',
    default: 'pending',
  })
  status: EventStatus;

  @Column({ type: 'timestamptz', nullable: true })
  executedAt?: Date;
}