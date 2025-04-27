import { useState, useEffect } from 'react';
import { Category } from '../models/category.model';
import { fetchCategory } from '../api/category.api';

export const useCategory = () => {
    // category 상태와 setCategory 함수 선언
    const [category, setCategory] = useState<Category[]>([]);
  
    // 컴포넌트가 마운트될 때 category 데이터를 API로 가져오기
    useEffect(() => {
      fetchCategory().then((category) => {
        if (!category) return;

        const categoryWithAll = [
            {
                id: null,
                name: "전체",
            },
            ...category,  // 기존 카테고리 배열과 합침
        ];

        setCategory(categoryWithAll);  // API에서 받아온 데이터를 상태에 설정
      });
    }, []);  // 빈 배열을 전달해 한 번만 실행되게 함
  
    return { category };
};
