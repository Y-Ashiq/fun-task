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
export class Event {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, (user) => user.events, {
    nullable: false,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  user: User;

  @Column({ type: 'text', nullable: false })
  event_name: string;

  @Column({ type: 'timestamptz', nullable: false })
  execute_at: Date;

  @Column({
    type: 'text',
    default: 'pending',
  })
  status: EventStatus;

  @Column({ type: 'timestamptz', nullable: true })
  executedAt?: Date;
}
