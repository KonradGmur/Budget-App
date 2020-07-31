import React from 'react';
import { Wrapper } from 'components';
import { Container, List } from './Navigation.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Navigation({ items = [] }) {
    return (
        <Container>
            <Wrapper>
                <List>
                    {items.map(item => (
                        <li key={item.to}>
                            <Link to={item.to}>{item.content}</Link>
                        </li>
                    ))}
                </List>
            </Wrapper>
        </Container >
    );
}

Navigation.propTypes = {
    items: PropTypes.array.isRequired
}

export default Navigation;