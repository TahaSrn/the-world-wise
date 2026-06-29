import styled from "styled-components";
import Button from "./Button";
import Heading from "./Heading";
import { media } from "../styles/breakpoints";

const StyledConfirmDelete = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  ${media.tablet} {
    width: 100%;
  }

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;

    ${media.tablet} {
      flex-wrap: wrap;
    }
  }
`;

function ConfirmDelete({ resourceName, onConfirm, disabled, onCloseModal }) {
  return (
    <StyledConfirmDelete>
      <Heading as="h3">Delete {resourceName}</Heading>
      <p>
        Are you sure you want to delete this {resourceName} permanently? This
        action cannot be undone.
      </p>

      <div>
        <Button
          variation="secondary"
          disabled={disabled}
          onClick={onCloseModal}
          size="small"
        >
          Cancel
        </Button>
        <Button
          variation="danger"
          size="small"
          disabled={disabled}
          onClick={onConfirm}
        >
          Delete
        </Button>
      </div>
    </StyledConfirmDelete>
  );
}

export default ConfirmDelete;
