import { css } from 'lit';

export default css`

.content {
    background: var(--ilw-color--background, white);
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

    .content.transparent {
        --ilw-color--background: transparent;
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

.content.lede .content-padding.decoration {
    border-left: 6px solid var(--ilw-color--control-accent);
    border-right: none;
    border-bottom: none;
}

.content.lede .content-inner.right .content-padding.decoration {
    border-left: none;
    border-right: 6px solid var(--ilw-color--control-accent);
    border-bottom: none;
}

.content.lede .content-inner.center .content-padding.decoration {
    border-left: none;
    border-right: none;
}

.content.lede .content-inner.center .content-padding.decoration .bottom-line {
    display: block;
    margin: 0 auto;
    width: 150px;
    padding-top: 10px;
    border-bottom: 6px solid var(--ilw-color--control-accent);
}

.bottom-line { display: none; }
`;
