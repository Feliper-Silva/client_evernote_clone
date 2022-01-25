import React, { Fragment } from 'react';
import { Column, Tag, Title, List, Button } from 'rbx';
import Moment from 'moment';

function ListNotes(props) {
  return (
    <Fragment>
      <Column.Group breakpoint="mobile">
        <Column size={6} offset={1}>
          <Title size={6}>{props.notes.length} Notes</Title>
        </Column>
        <Column size={2}>
           
          <Button
            state="active"
            color="custom-purple"
            outlined
            size="small"
            onClick={() => props.createNote()}
          >
              Notes +  
          </Button>
        </Column>
      </Column.Group>
      <List className="notes-list">
        {props.notes.map((item, key) => (
          <List.Item
            key={key}
            onClick={() => props.selectNote(item._id)}
            active={item === props.current_note}
          >
            <Title size={6} subtitle spaced={false}>
              {item.body.replace(/(<([^>]+)>)/gi, '').substring(0, 30)}
            </Title>

            <Column.Group breakpoint="mobile">
              <Column size={10}>
                <Tag color="dark">
                  {Moment(item.created_at).format('DD/MM')}
                </Tag>
              </Column>
            </Column.Group>
          </List.Item>
        ))}
      </List>
    </Fragment>
  );
}

export default ListNotes;
