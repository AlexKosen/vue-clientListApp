<template>
    <button type="submit" class="add-user-button">
      <i class="far fa-edit"></i>
    </button>
  </template>
  
  <style>
  .add-user-button {
    position: fixed;
    top: 10px;
    right: 100px;
    background-color: transparent;
    padding: 15px;
    border: solid 1px #006aff;
    border-radius: 50%;
    cursor: pointer;
    font-size: 24px;
    transition: background-color 0.3s ease;
  }
  
  .add-user-button:hover {
    background-color: #006aff;
  }
  
  .far.fa-edit {
    color: #006aff;
  }
  /* Стилі для зміни кольору іконки при наведенні */
  .add-user-button:hover .far.fa-edit {
    color: #fff;
  }

  @media screen and (max-width: 600px) {
    .add-user-button {
      right: 20px;
    }
    
  }
  </style>
  