// 📁 Title.test.tsx
// Title 컴포넌트의 렌더링, size, color props가 스타일에 잘 반영되는지를 테스트합니다.

import { render, screen } from '@testing-library/react';
import Title from "./Title";
import { BookStoreThemeProvider } from '../../context/themeContext';

describe("🧪 Title 컴포넌트 테스트", () => {

  it('🖥️ 렌더링 테스트 - 텍스트가 잘 보이는지 확인', () => {
    render(
      <BookStoreThemeProvider>
        <Title size="large">제목</Title>
      </BookStoreThemeProvider>
    );

    // "제목"이라는 텍스트가 실제로 문서 안에 존재하는지 확인
    expect(screen.getByText('제목')).toBeInTheDocument();
  });

  it('📏 size props 적용 테스트 - font-size가 올바르게 적용되었는지 확인', () => {
    render(
      <BookStoreThemeProvider>
        <Title size="large">제목</Title>
      </BookStoreThemeProvider>
    );

    // "제목" 요소를 가져와서 해당 font-size가 적용되어 있는지 확인
    const titleElement = screen.getByText('제목');
    expect(titleElement).toHaveStyle({
      fontSize: '2rem'
    });
  });

  it('🎨 color props 적용 테스트 - color가 잘 반영되었는지 확인', () => {
    render(
      <BookStoreThemeProvider>
        <Title size="large" color="primary">제목</Title>
      </BookStoreThemeProvider>
    );

    // "제목" 요소에 color 스타일이 잘 적용되었는지 확인
    const titleElement = screen.getByText('제목');
    expect(titleElement).toHaveStyle({
      color: 'brown'
    });
  });

});
