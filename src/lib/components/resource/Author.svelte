<!-- <div class="tag">
    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
    <slot></slot>
</div>

<style>
  div {
    font-size: 0.8em;
    vertical-align: middle;
    padding: 0.2rem 0.3rem;
  font-size: 0.6rem;
  }


</style>
 -->

<style>
  .author {
    font-size: 0.6rem;
    display:inline-flex;
    align-items: center;
    white-space: nowrap;
    color: var(--muted-color)
  }
  svg {
    margin-right: 0.2em;
    margin-left: 0.2em;
  }
  </style>
  
  <span class="me-1 author">
    <span>Created by </span>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
    <strong><slot></slot></strong>
  </span>