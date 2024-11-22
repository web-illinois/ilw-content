import { css } from 'lit';

export default css`

.content {
    background-color: var(--ilw-content--background-color, white);
}

    .content.fixed {
        left:50%;
        margin-left:-50vw;
        margin-right:-50vw;
        padding-left:0;
        padding-right:0;
        position:relative;
        right:50%;
        width:100vw;
    }

    .content.page {
        margin: var(--ilw-content--main-margin, 0);
    }


    .content.blue, .content.orange, .content.blue-gradient, .content.orange-gradient {
        --ilw-text--color: white;
        --ilw-heading--color: white;
        --ilw-link--color: white;
        --ilw-link--visited-color: white;
        --ilw-link--focused-outline: initial;
        --ilw-link--focused-background-color: initial;
    }

    .content.blue {
        --ilw-content--background-color: var(--il-blue);
        --ilw-link--focused-color: var(--il-orange);
    }

    .content.orange {
        --ilw-content--background-color: var(--il-orange);
        --ilw-link--focused-color: var(--il-blue);
        --ilw-text--color: var(--il-blue);
        --ilw-heading--color: var(--il-blue);
        --ilw-link--color: var(--il-blue);
        --ilw-link--visited-color: var(--il-blue);
    }

    .content.blue-gradient {
        --ilw-content--background-color: var(--il-gradient-blue), var(--il-blue-darker-1);
        --ilw-link--focused-color: var(--il-orange);
    }

    .content.orange-gradient {
        --ilw-content--background-color: var(--il-gradient-orange), var(--il-altgeld);
        --ilw-link--focused-color: var(--il-blue);
    }
    
    .content.gray {
        --ilw-content--background-color: var(--il-storm-lighter-4);
    }

    .content.transparent {
        --ilw-content--background-color: transparent;
    }


.content-inner.fixed {
    margin: var(--ilw-content--main-margin, 0);
}

.content-inner.center {
    text-align: center;
}

.content-inner.right {
    text-align: right;
}

.content.introduction .content-inner, .content.lede .content-inner {
    margin: auto;
    max-width: var(--ilw-content--narrow-max-width);
}

.content.introduction .content-padding, .content.lede .content-padding {
    padding: var(--ilw-content--narrow-padding);
}

.content.inset .content-padding {
    padding: var(--ilw-content--inset-padding);
}
`;
