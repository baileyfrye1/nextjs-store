'use client';
import { useState } from 'react';
import { SubmitButton } from '../form/Buttons';
import FormContainer from '../form/FormContainer';
import { Card } from '../ui/card';
import RatingInput from './RatingInput';
import TextAreaInput from '../form/TextAreaInput';
import { Button } from '../ui/button';
import { createReviewAction } from '@/utils/actions';
import { useUser } from '@clerk/nextjs';

const SubmitReview = ({ productId }: { productId: string }) => {
  const [isReviewFormVisible, setIsReviewFormVisible] = useState(false);
  const { user } = useUser();
  return (
    <div>
      <Button size='lg' onClick={() => setIsReviewFormVisible((prev) => !prev)}>
        Leave Review
      </Button>
      {isReviewFormVisible && (
        <Card className='p-8 mt-8'>
          <FormContainer action={createReviewAction}>
            <input type='hidden' name='productId' value={productId} />
            <input
              type='hidden'
              name='authorName'
              value={user?.firstName || 'user'}
            />
            <input type='hidden' name='authorImageUrl' value={user?.imageUrl} />
            <RatingInput name='rating' />
            <TextAreaInput
              name='comment'
              labelText='feedback'
              defaultValue='Outstanding product'
            />
            <SubmitButton className='mt-4' />
          </FormContainer>
        </Card>
      )}
    </div>
  );
};
export default SubmitReview;