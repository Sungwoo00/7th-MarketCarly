import { LitElement, html, css } from 'lit';
import resetCSS from '../resetCSS';
import baseCSS from '../base';

export class HeaderTop extends LitElement {
  static get styles() {
    return [
      baseCSS,
      resetCSS,
      css`
        .top {
          width: 100%
          border-bottom: 1px solid var(--gray--100);
        }

        .top__inner {
          max-width: 65.625rem;
          margin: 0 auto;
        }

        .top__login {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: 0.75rem;
          padding: 0.5rem 1rem;
        }

        .top__list {
          display: flex;
          list-style: none;
          gap: 0.75rem;
        }

        .top__item {
          position: relative;
          font-size: var(--text-xs);
        }

        .top__item:not(:last-child)::after {
          content: '';
          position: absolute;
          right: -0.5rem;
          top: 50%;
          transform: translateY(-50%);
          width: 1px;
          height: 0.75rem;
          background-color: var(--gray--200);
        }

        .top__link {
          color: var(--gray--600);
          text-decoration: none;
        }

        .top__link:hover {
          color: var(--primary);
        }

        .top__search {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          max-width: 1050px;
          margin: 0 auto;
        }

        .top__logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .logo__image {
          width: 82px;
          height: 42px;
        }

        .logo__links {
          display: flex;
          gap: 0.75rem;
          align-items: center;
        }

        .logo__link {
          font-size: var(--text-lg);
          font-weight: var(--font-bold);
          color: var(--primary);
          display: flex; 
          align-items: center; 
        }

        .logo__divide {
          width: 1px;
          height: 14px;
          background-color: var(--gray--200);
        }

        .search__form {
          position: relative;
          width: 400px;
        }

        .search__input {
          width: 100%;
          padding: 0.875rem 1rem;
          border: 1px solid var(--primary, #5F0080);
          border-radius: 4px;
          font-size: var(--text-base);
        }

        .search__button {
          position: absolute;
          right: 1rem;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          align-items: center; 
        }

        .top__icons, .top__icons-list {
          display: flex;
          gap: 1.25rem;
          align-items: center;
        }
        .top__icons-list {  
          list-style: none; 
          padding: 0;    
          margin: 0;     
        }

        .top__icons-button {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          display: flex; 
          align-items: center; 
        }
      `,
    ];
  }

  render() {
    return html`
      <div role="banner">
        <div class="top__inner">
          <nav class="top__login" aria-label="사용자 메뉴">
            <ul class="top__list" role="list">
              <li class="top__item">
                <a href="/register" class="top__link">회원가입</a>
              </li>
              <li class="top__item">
                <a href="/login" class="top__link">로그인</a>
              </li>
              <li class="top__item">
                <a href="/cs" class="top__link">고객센터</a>
              </li>
            </ul>
          </nav>

          <div class="top__search">
            <h1 class="top__logo">
              <a href="/" class="logo__link" aria-label="메인페이지로 이동">
                <img
                  src="/src/assets/icons/logo.svg"
                  alt="마켓칼리"
                  class="logo__image"
                />
              </a>

              <nav class="logo__links" aria-label="마켓 선택">
                <a href="/market" class="logo__link">마켓칼리</a>
                <span class="logo__divide" aria-hidden="true"></span>
                <a href="/beauty" class="logo__link">뷰티칼리</a>
              </nav>
            </h1>

            <form class="search__form" role="search">
              <input
                id="searchInput"
                type="search"
                class="search__input"
                placeholder="검색어를 입력해주세요"
              />
              <button type="submit" class="search__button" aria-label="검색">
                <img
                  src="/src/assets/icons/Search.svg"
                  alt=""
                  aria-hidden="true"
                />
              </button>
            </form>

            <nav class="top__icons" aria-label="사용자 도구">
              <ul class="top__icons-list" role="list">
                <li>
                  <button class="top__icons-button" aria-label="배송지 등록">
                    <img
                      src="/src/assets/icons/Location.svg"
                      alt=""
                      aria-hidden="true"
                    />
                  </button>
                </li>
                <li>
                  <button class="top__icons-button" aria-label="찜하기">
                    <img
                      src="/src/assets/icons/Heart.svg"
                      alt=""
                      aria-hidden="true"
                    />
                  </button>
                </li>
                <li>
                  <button class="top__icons-button" aria-label="장바구니">
                    <img
                      src="/src/assets/icons/Cart2.svg"
                      alt=""
                      aria-hidden="true"
                    />
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('header-top', HeaderTop);
