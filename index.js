// grid-components

import styled from 'styled-components';
import PropTypes from 'prop-types';

// GridWrapper ---------------

// Props:
// cols
// gap
// rowMin
// rowMax
// bg

export const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(${({cols}) => cols || 12}, 1fr);
    grid-gap: ${({gap}) => gap || '0'};
    grid-auto-rows: minmax(${({rowMin}) => rowMin || 'auto'}, ${({rowMax}) => rowMax || 'auto'});
    background-color: ${({bg}) => bg};
`
// Item ---------------

// Props:
// col {xs, sm, md, lg, xl}
// row {xs, sm, md, lg, xl}
// h
// minH
// maxH
// maxW
// minW
// bg

export const Item = styled.div`

    height: ${({h}) => h};
    min-height: ${({minH}) => minH};
    max-height: ${({maxH}) => maxH};
    min-width: ${({minW}) => minW};
    max-width: ${({maxW}) => maxW};
    background-color: ${({bg}) => bg};

    /* Extra small <576px */
    grid-column: ${({col}) => col.xs || col};
    grid-row: ${({row}) => row.xs || row};

    /* Small >=576px */
    @media (min-width: 576px) {
        grid-column: ${({col}) => col.sm};
        grid-row: ${({row}) => row.sm};
    }

    /* Medium >=768 */
    @media (min-width: 768px) {
        grid-column: ${({col}) => col.md};
        grid-row: ${({row}) => row.md};
    }

    /* Large >=992 */
    @media (min-width: 992px) {
        grid-column: ${({col}) => col.lg};
        grid-row: ${({row}) => row.lg};
    }

    /* Extra Large >= 1200*/
    @media (min-width: 1200px) {
        grid-column: ${({col}) => col.xl};
        grid-row: ${({row}) => row.xl};
    }
`

// Prop Types --------------------------

GridWrapper.propTypes = {
    cols: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),

    gap: PropTypes.string,

    rowMin: PropTypes.string,

    rowMax: PropTypes.string,
    
    bg: PropTypes.string,
}

Item.propTypes = {
    col: PropTypes.oneOfType([
        PropTypes.objectOf(PropTypes.string),
        PropTypes.string,
    ]).isRequired,

    row: PropTypes.oneOfType([
        PropTypes.objectOf(PropTypes.string),
        PropTypes.string,
    ]).isRequired,

    h: PropTypes.string,

    minH: PropTypes.string,

    maxH: PropTypes.string,

    maxW: PropTypes.string,

    minW: PropTypes.string,

    bg: PropTypes.string,
}
